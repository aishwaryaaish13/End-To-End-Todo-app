import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function UpdateTodoModal({ open, setOpen, title, setTitle, onSave }) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <Input value={title} onChange={e => setTitle(e.target.value)} />
        <Button onClick={onSave}>Save</Button>
      </DialogContent>
    </Dialog>
  );
}
